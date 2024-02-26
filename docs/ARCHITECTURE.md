# Architecture

## Introduction
This project is a tool that allows students at UC Merced to quickly view a list of all courses that provide given GE Badges. This tool is important 
because students need a courses that satisfy each GE Badge to graduate.

## Overview
This app's functionality can be divided into two main parts: the Frontend and the Backend

### Frontend
Written with React, the frontend allows the user to select badges any number of GE badges from a hard-coded list. Immediately after selecting a badge, 
the app sends a request to the backend for a list of courses that give all of the requested badges. The received list is then displayed for the user.

### Backend
Written with Flask, the backend does 2 main things:
1. Scrapes the official UC Merced websites for badge information.
2. As a REST API, uses its collected badge information to return a complete list of courses that provide all given GE badges.

More information about the backend can be found in this repository: https://github.com/TheVanadium/uc_merced_badge_api