#flask app
import os
from flask import Flask
from find_overlap import findCourseOverlap


app = Flask(__name__)

#api that gets courses for a list of badges
@app.route('/<badges>')
def get_courses(badges):
    badges = badges.split(',')
    return findCourseOverlap([badge for badge in badges])


if __name__ == '__main__':
    app.run(debug=True)
