const growthArray = [25, 1, 70, 55, 63, 12, 3];

const userName = prompt('Как вас зовут?', 'Евгения');
if (userName) {
    alert(`Привет, ${userName}!`);
} else {
    alert(`Добро пожаловать, человек из прошлого!`)
}

console.log(growthArray);
console.log(findMax(growthArray));
console.log(filterMoreThan20(growthArray));
console.log(findSumArray(growthArray));

function findMax(array)
{
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function filterMoreThan20(array)
{
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > 20)
        {
            result.push(array[i]);
        }
    }

    return result;
}

function findSumArray(array)
{
    let sum = 0;

    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    return sum;
}

