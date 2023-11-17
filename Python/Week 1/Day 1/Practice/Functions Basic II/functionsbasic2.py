def countdown(num):
    arr=[]
    for i in range (num,-1,-1):
        arr.append(i)
    return arr
print(countdown(5))

def print_and_return(list):
    print(list[0])
    return list[1]
print(print_and_return([1,2]))


def first_plus_length(lista):
    
    return lista[0]+len(lista)
print(first_plus_length([1,2,3]))



def values_greater_than_second(list):
    arr=[]
    for i in range(0,len(list),1):
        if list[i]>list[1]:
            arr.append(list[i])
    print(len(arr))
    return arr 
print(values_greater_than_second([5,2,3,3,2,1,4]))

def value2(list):
    arr=[]
    for i in list:
        if i>list[1]:
            arr.append(i)
    print(len(arr))
    return arr
print(value2([5,2,3,3,2,1,4]))

def length_and_value(n,val):
    arr=[]
    for i in range(n):
        arr.append(val)
    return arr
print(length_and_value(17,9))

 

    