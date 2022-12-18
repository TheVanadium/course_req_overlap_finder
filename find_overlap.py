
# Description: This program reads two files and finds the courses that are in both files.

# turn the above into a function
def find_overlap(filename1, filename2, outputFile):
    # open the file diversity_and_identity_courses and read entire line into a list
    with open(filename1, 'r') as f:
        file1courses = f.readlines()
        # remove the newline character from each line
        file1courses = [course.rstrip() for course in file1courses]

    # open the file literary_and_textual_analysis_courses and read entire line into a list
    with open(filename2, 'r') as f:
        file2courses = f.readlines()
        # remove the newline character from each line
        file2courses = [course.rstrip() for course in file2courses]

    # create a list of courses that are in both files
    overlap = [course for course in file1courses if course in file2courses]

    # print the courses that are in both files, new line for each course
    for course in overlap:
        print(course)

    # write results to a file
    with open(outputFile, 'w') as f:
        # write overlapping filenames on first line
        f.write(filename1 + ' and ' + filename2 + '\n')
        for course in overlap:
            f.write(course + '\n')

# call the function

#input prompt
filename1 = input('Enter the name of the first file: ')
filename2 = input('Enter the name of the second file: ')
outputFile = input('Enter the name of the output file: ')

find_overlap(filename1, filename2, outputFile)