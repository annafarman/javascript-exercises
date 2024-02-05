
// Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

const fibonacci = function(n) {
    if (n < 0 ) return "OOPS";
    if (n == 0 ) return 0;
    if (n <= 2) return 1;
    else {
        let prev = 1, current = 1, next = 0;
        
        for (let i = 3; i <= n; i++ ) {
            next = prev + current;
            prev = current;
            current = next;
        }
        
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
