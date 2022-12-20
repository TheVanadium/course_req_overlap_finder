#flask app
import os
from flask import Flask
from courseScraper import getUCMercedCourses


app = Flask(__name__)

#api that gets the courses for a badge
@app.route('/<badge>')
def get_courses(badge):
    courses = getUCMercedCourses(badge)
    return {
        'courses': courses
    }

if __name__ == '__main__':
    app.run(debug=True)