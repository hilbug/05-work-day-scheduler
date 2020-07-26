# 05-work-day-scheduler

## Description

A simple calendar application that allows the user to save events between 8AM and 7PM. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The page leverages Moment.js library for date and time and Bootstrap for HTML design.

The work day scheduler can be accessed here: https://hilbug.github.io/05-work-day-scheduler/

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Screenshots

### Top half of scheduler
![Screen Shot 2020-07-25 at 8 21 23 PM](https://user-images.githubusercontent.com/65197724/88468658-ddde7400-ceb4-11ea-8dd9-8800dc054a39.png)

### Bottom half of scheduler
![Screen Shot 2020-07-25 at 8 21 49 PM](https://user-images.githubusercontent.com/65197724/88468672-049caa80-ceb5-11ea-9c20-00a0c0ee773c.png)

## Honorable Mentions
- Moment.js cheatsheet: https://devhints.io/moment
- Youtube channel dcode: https://www.youtube.com/channel/UCjX0FtIZBBVD3YoCcxnDC4g
- Thank you to Kemp for assisting with local storage.