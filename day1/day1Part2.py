from functools import reduce

with open('./input.txt') as f:
    numbers = [int(line.strip()) for line in f]


def findThreeNums(input) :

    input.sort()
    result = set()
    target = 2020

    for i, num in enumerate(input[:-2]):
        dict = {}

        for x in input[i+1:]:
            if x not in dict:
                dict[target - num - x] = 1
            else:
                result.add((num, target -num -x, x))

    return list(map(list,result))




numsList = findThreeNums(numbers)
ans = reduce(lambda x, y: x*y, numsList[0])
print(ans)
