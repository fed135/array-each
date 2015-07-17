# array-each

Better-looking than Array.prototype.forEach

## Features

- Uses this to refer to array instead of passed argument
- Breakable!


## Example

    [1,2,3,4,5].each(function(value, index, exit) {
      // this[index] === value;
      console.log(value);
      if (value === 2) exit();
    });
    
    // Will print:
    // 1
    // 2
    
    

    
