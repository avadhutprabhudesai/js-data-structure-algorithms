export function knapSack(weights, values, sackWeight, n = weights.length) {
  /**
   * ===base condition
   * weights.length === 0 && values.length === 0 return 0
   *
   */
  if (n === 0 || sackWeight === 0) {
    return 0;
  }

  if (weights[n - 1] <= sackWeight) {
    return Math.max(
      values[n - 1] +
        knapSack(weights, values, sackWeight - weights[n - 1], n - 1),
      knapSack(weights, values, sackWeight, n - 1)
    );
  }
  if (weights[n - 1] > sackWeight) {
    return knapSack(weights, values, sackWeight, n - 1);
  }
}

export function memoizedKnapSack(wt, val, W, n = wt.length) {
  const t = Array.from(Array(n + 1), () => Array(W + 1));
  for (let i = 0; i < t.length; i++) {
    const row = t[i];
    for (let j = 0; j < row.length; j++) {
      row[j] = -1;
    }
  }
  function knapSack(wt, val, W, n) {
    /**
     * ===base condition
     * n === 0 || W === 0 return 0;
     *
     * ====memoization
     * create t[n+1][W+1]
     * Initialize t with -1
     * In each recursive call, check if t[n][W] contains a value other than -1,
     * If yes, then use that value instead of doing the recursive call
     * Else store the result of the recursive call into the cell.
     */
    if (n === 0 || W === 0) {
      return 0;
    }
    if (t[n][W] !== -1) {
      return t[n][W];
    }
    let profit;
    if (wt[n - 1] <= W) {
      profit = Math.max(
        val[n - 1] + knapSack(wt, val, W - wt[n - 1], n - 1),
        knapSack(wt, val, W, n - 1)
      );
      t[n][W] = profit;
      return profit;
    } else {
      profit = knapSack(wt, val, W, n - 1);
      t[n][W] = profit;
      return profit;
    }
  }

  return knapSack(wt, val, W, n);
}

export function topdownKnapSack(wt, val, W, n = wt.length) {
  /**
   * Create a matrix of [n+1][W+1] dimensions
   * Initialize first row and first column with 0
   * For rest of the matrix, loop and decide value of each cell.
   * Answer will be in t[n+1][w+1] cell
   */
  const t = Array.from(Array(n + 1), () => Array(W + 1));
  for (let i = 0; i < t.length; i++) {
    const row = t[i];
    for (let j = 0; j < row.length; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < t.length; i++) {
    const row = t[i];
    for (let j = 1; j < row.length; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

export function subsetSum(wt, W, n = wt.length) {
  /**
   * create t[n][w] where n = 4 and w = 5
   * initialize
   *  true where i === 0
   *  false where j === 0
   *
   *
   *
   */

  const t = Array.from(Array(n + 1), () => Array(W + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0) {
        t[i][j] = false;
      }
      if (j === 0) {
        t[i][j] = true;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = t[i - 1][j - wt[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

export function equalSumPartition(wt) {
  let sum = 0;
  for (let i = 0; i < wt.length; i++) {
    sum = sum + wt[i];
  }

  if (sum % 2 !== 0) {
    return false;
  }

  return subsetSum(wt, sum / 2);
}

export function countNumberOfSubsets(wt, W, n = wt.length) {
  /**
   * create t[n][w] where n = 4 and w = 5
   * initialize
   *  1 where i === 0
   *  0 where j === 0
   */

  const t = Array.from(Array(n + 1), () => Array(W + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0) {
        t[i][j] = 0;
      }
      if (j === 0) {
        t[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = t[i - 1][j - wt[i - 1]] + t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

export function minimumSubSetDifference(arr, n = arr.length) {
  /**
   * Calculate subset sum for given arr
   *
   * Take first half of the last row of the matrix and store it in array
   *
   * Loop over it to find the min diff with the formulae
   * min(Range - 2S1)
   *
   */

  const range = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const t = Array.from(Array(n + 1), () => Array(range + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= range; j++) {
      if (i === 0) t[i][j] = false;
      if (j === 0) t[i][j] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= range; j++) {
      if (arr[i - 1] <= range) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  const s1 = t[n].slice(0, range / 2);
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i]) {
      min = Math.min(min, range - 2 * i);
    }
  }
  return min;
}

export function countNumberOfSubsetsWithGivenDiff(arr, diff) {
  /**
   * s2 - s1 = diff;
   *
   * range - s1 - s1 = diff
   *
   * range - 2s1 = diff
   *
   * s1 = (range + diff) / 2
   *
   * now, return the count of subset for arr where sum is s1 using the problem we solved earlier
   */
  let range = arr.reduce((acc, curr) => acc + curr, 0);
  let s1 = (range + diff) / 2;
  if (!Number.isInteger(s1)) return 0;

  return countNumberOfSubsets(arr, s1);
}

export function targetSum(arr, diff) {
  /**
   * exactly same as countNumberOfSubsetSumWithGivenDiff
   */
}

/**
 * Given a rod of length n inches
 * and an array of prices that includes prices of all pieces of size smaller than n.
 * Determine the maximum value obtainable by cutting up the rod
 * and selling the pieces.
 */
export function rodCutting(N, prices) {
  const n = prices.length,
    W = N;
  const sizes = Array.from(Array(n), (n, i) => i + 1);

  const t = Array.from(Array(n + 1), () => Array(W + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (sizes[i - 1] <= j) {
        t[i][j] = Math.max(prices[i - 1] + t[i][j - sizes[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

/**
 * Given an array of coins,
 * Find number of combinations from the given denominations to have total
 */

export function countNumberOfCombinationsForGivenSum(coins, sum) {
  const n = coins.length,
    W = sum;

  const t = Array.from(Array(n + 1), () => Array(W + 1));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0) {
        t[i][j] = 0;
      }
      if (j === 0) {
        t[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (coins[i - 1] <= j) {
        t[i][j] = t[i][j - coins[i - 1]] + t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}
