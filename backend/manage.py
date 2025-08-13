#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

# New lines to ensure the project directory is in the Python path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
if sys.path[0] != BASE_DIR:
    sys.path.insert(0, BASE_DIR)

def main():
    """Run administrative tasks."""
    # Corrected the project name from 'moons_project' to 'the_moons_project'
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'the_moons_project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()