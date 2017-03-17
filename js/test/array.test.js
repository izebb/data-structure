import {hasUniqueChar, isPermutation, URLifyRegex} from '../array';
import test from 'ava';

test('Should tell if all characters are unique in array', t => {
  t.is(hasUniqueChar('memory'), false, 'does not have unique characters')
  t.is(hasUniqueChar('brain'), true, 'have unique characters')

})

test('Should tell if two string are permutation of each other', t => {
  t.is(isPermutation('baba', 'abba'), true)
  t.is(isPermutation('baba', 'aiba'), false)
  t.is(isPermutation('baba', 'aibba'), false)

})

test('Should remove all space in string', t => {
  t.is(URLifyRegex('Mr John ', ), 'Mr%20John');
  t.is(URLifyRegex('Mr          John    '), 'Mr%20John');
})
