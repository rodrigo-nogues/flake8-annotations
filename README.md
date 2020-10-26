# Pylint Problem Matcher/Annotations

Adds error and warning problem matchers for [Pylint](https://www.pylint.org/) checks on Python projects.
This action only generates [Github Annotations](https://developer.github.com/v3/checks/runs/#annotations-object) from pylint output, it does *not* run pylint.
Based on [rbialon/flake8-annotations](https://github.com/rbialon/flake8-annotations).

## Inputs

No inputs needed.

## Outputs

Only Github Annotations are generated from the checks output, no other output is generated.

## Screenshot

![Example annotations for file violations.py](https://user-images.githubusercontent.com/8565229/74146391-48e70780-4c01-11ea-9c8b-7dc1ffa8d787.png)

## Example usage

Add the following section to your Github workflow in the job running pylint before the step executing pylint:

```yaml
    - name: Setup Pylint annotations
      uses: rodrigo-nogues/pylint-annotations@v1
```
