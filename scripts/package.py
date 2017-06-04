#!/bin/env python3
import os
import collections
import functools
import glob
import json
import pprint
import typing

import click

SCRIPT_DIR = os.path.abspath(os.path.dirname(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
PACKAGES_DIRNAME = 'packages'

JSONLeafValue = typing.Union[int, float, str, bool]
JSONValue = typing.Union[JSONLeafValue, typing.List[JSONLeafValue]]


@functools.wraps(click.echo)
def pecho(message=None, *args, **kwargs):
    message = pprint.pformat(message) if message is not None else None
    return click.echo(message, *args, **kwargs)


def set_value(package: collections.Mapping, keypath: str, value: JSONValue):
    paths = keypath.split('.')
    target = package
    for path in paths[:-1]:
        target = package.setdefault(path, {})
        assert isinstance(target, collections.Mapping), "Invalid keypath"
    assert isinstance(target, collections.Mapping), "Invalid keypath"
    path = paths[-1]
    target[path] = value


def remove_value(package: collections.Mapping, keypath: str):
    paths = keypath.split('.')
    target = package
    for path in paths[:-1]:
        if path not in target:
            return
        target = package[path]
        if not isinstance(target, collections.Mapping):
            return
    if not isinstance(target, collections.Mapping):
        return
    path = paths[-1]
    if path in target:
        del target[path]


def get_package_json(packagedir: str):
    return os.path.join(packagedir, 'package.json')


def load_pacakge_json(filename: str):
    decoder = json.JSONDecoder(object_pairs_hook=collections.OrderedDict)
    with open(filename) as f:
        return decoder.decode(f.read())


def dump_pacakge_json(package, filename):
    with open(filename, 'w') as f:
        decoded = json.dumps(package, ensure_ascii=False, indent=2)
        f.write(decoded)
        f.write('\n')  # Add line feed @ EOF


def collect_package_dirs(path: str = '.'):
    def has_package_json(path):
        return os.path.isfile(get_package_json(path))

    return filter(
        has_package_json,
        filter(
            os.path.isdir,
            glob.glob(os.path.join(PROJECT_DIR, PACKAGES_DIRNAME, '*')))
    )


def coerce_value(value: str) -> JSONLeafValue:
    try:
        return int(value)
    except ValueError:
        pass
    try:
        return float(value)
    except ValueError:
        pass
    if value.lower() == 'true':
        return True
    if value.lower() == 'false':
        return False
    return value

# Comands


@click.group()
def cli():
    pass


@cli.command()
@click.argument('keypath')
@click.argument('value')
def set(keypath: str, value: str):
    package_paths = list(map(get_package_json, collect_package_dirs()))
    packages = [(path, load_pacakge_json(path)) for path in package_paths]

    for path, package in packages:
        set_value(package, keypath, value)

    for path, package in packages:
        dump_pacakge_json(package, path)


@cli.command()
@click.argument('keypath')
def remove(keypath: str):
    package_paths = list(map(get_package_json, collect_package_dirs()))
    packages = [(path, load_pacakge_json(path)) for path in package_paths]

    for path, package in packages:
        remove_value(package, keypath)

    for path, package in packages:
        dump_pacakge_json(package, path)


def main():
    cli()


if __name__ == '__main__':
    main()
