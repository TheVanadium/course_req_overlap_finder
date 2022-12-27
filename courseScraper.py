import requests
from bs4 import BeautifulSoup

# function that gets the courses from a url and prints array of courses
def getUCMercedCourses(badgeUrl):
    BASE_URL = "https://ge.ucmerced.edu/intellectual-experience-badges/"
    response = requests.get(BASE_URL + badgeUrl)

    soup = BeautifulSoup(response.text, "lxml")

    # course list items are in h2 Courses's next sibling div
    courseListItems = soup.find("h2", text="Courses").find_next_sibling("div").find_all("li")

    # get the text of each course and remove the "Units: " + unit number ... part
    # SPAN 195 has a weird format excluding the exact number of units, so we manually replace it
    courses = [course.text for course in courseListItems]
    courses = [course[:-9] for course in courses]

    #in courses replace "SPAN 195: Upper Division Undergraduate Resear" with "SPAN 195: Upper Division Undergraduate Research"
    courses[courses.index("SPAN 195: Upper Division Undergraduate Resear")] = "SPAN 195: Upper Division Undergraduate Research"

    return courses

if __name__ == "__main__":
    getUCMercedCourses("sustainability")