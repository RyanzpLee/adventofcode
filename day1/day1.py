with open('./input.txt') as f:
    numbers = [int(line.strip()) for line in f]


def findNums(input) :
    dict = {}

    for num in input:
        m = 2020 - num
        if m in dict:
            return [dict[m], m]
        else:
            dict[num] = m

answer = findNums(numbers)

print(answer[0] * answer[1])
