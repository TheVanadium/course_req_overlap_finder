from courseScraper import getUCMercedCourses

def findCourseOverlap(badgeArray):
    # get the courses for each badge
    courses = [getUCMercedCourses(badge) for badge in badgeArray]

    # find the intersection of the courses
    overlap = set(courses[0]).intersection(*courses[1:])

    overlap = sorted(overlap)

    # print the overlap
    for course in overlap:
        print(course)

if __name__ == "__main__":
    findCourseOverlap(["sustainability", "global-awareness", "ethics"])