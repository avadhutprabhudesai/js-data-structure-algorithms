export function mcm(arr) {
  function solve(arr, i = 1, j = arr.length - 1) {
    if (i >= j) {
      return 0;
    }
    let min = Number.POSITIVE_INFINITY;
    for (let k = i; k < j; k++) {
      let temp =
        solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
      min = Math.min(temp, min);
    }
    return min;
  }

  return solve(arr);
}

export function mcmMemoized(arr) {
  let t = Array.from(Array(arr.length), () => Array(arr.length));
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t.length; j++) {
      t[i][j] = -1;
    }
  }
  function solve(arr, i = 1, j = arr.length - 1) {
    if (i >= j) {
      return 0;
    }

    if (t[i][j] !== -1) {
      return t[i][j];
    }

    let min = Number.POSITIVE_INFINITY;
    for (let k = i; k < j; k++) {
      let temp =
        solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
      min = Math.min(temp, min);
      t[i][j] = min;
    }
    return min;
  }

  return solve(arr);
}

export function palindromPartition(str) {
  function isPalindrome(str) {
    if (str.length === 1) {
      return true;
    }
    let i = 0,
      j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  function solve(str, i, j) {
    /**
     * formulae
     * solve(str, i, k) + solve(str. k+1, j) + 1
     *
     * i = 0,
     * j = str.length - 1
     * k = i to j-1
     *
     * base condition
     * if(i >= j) return 0;
     *
     * if(isPalindrome(str)) return 0
     */

    if (i >= j) return 0;

    if (isPalindrome(str.slice(i, j + 1))) return 0;

    let min = Number.POSITIVE_INFINITY;
    for (let k = i; k < j; k++) {
      let temp = solve(str, i, k) + solve(str, k + 1, j) + 1;

      min = Math.min(min, temp);
    }
    return min;
  }

  return solve(str, 0, str.length - 1);
}

export function palindromPartitionMemoized(str) {
  const t = Array.from(Array(str.length + 1), () => Array(str.length + 1));
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      t[i][j] = -1;
    }
  }

  function isPalindrome(str) {
    if (str.length === 1) {
      return true;
    }
    let i = 0,
      j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  function solve(str, i, j) {
    /**
     * formulae
     * solve(str, i, k) + solve(str. k+1, j) + 1
     *
     * i = 0,
     * j = str.length - 1
     * k = i to j-1
     *
     * base condition
     * if(i >= j) return 0;
     *
     * if(isPalindrome(str)) return 0
     */

    if (i >= j) return 0;

    if (isPalindrome(str.slice(i, j + 1))) return 0;

    if (t[i][j] !== -1) return t[i][j];

    let min = Number.POSITIVE_INFINITY;
    for (let k = i; k < j; k++) {
      let temp = solve(str, i, k) + solve(str, k + 1, j) + 1;

      min = Math.min(min, temp);
    }
    t[i][j] = min;
    return min;
  }

  return solve(str, 0, str.length - 1);
}
