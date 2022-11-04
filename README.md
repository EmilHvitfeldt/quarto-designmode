# reveal-auto-agenda

A quarto extension, adding a toggle for [designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) in html outputs, including revealjs slides.

## Installation

To install this extension in your current directory (or into the Quarto project that you're currently working in), use the following command:

``` shell
quarto install extension emilhvitfeldt/quarto-designmode
```

## Enabling

Add this to your document or project options:

``` yaml
filters:
  - designmode
```

## Usage

When Viewing a html document press `Alt + D` to enable designMode, this allows you to edit text and move elements around. Press `Alt + D` again to disable designMode. Changes made to the page will NOT modify the source document.

## Example

![](example.gif)

## Live preview

You can view a live preview of an example presentation at <https://emilhvitfeldt.github.io/quarto-designmode/>.
