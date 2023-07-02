# CLI for Replicating Fermat's Algorithm

This is a Command Line Interface (CLI) application that allows you to replicate Fermat's Algorithm to find non-trivial factors of an odd number.

Fermat's Algorithm is a factorization method based on Fermat's theorem, which states that if `n` is a composite odd number and `a` is an integer, then `a` raised to the `n`th power is congruent to `a` modulo `n`. This can be represented by the following formula:

    a^n ≡ a (mod n)

The Fermat's Algorithm utilizes this property to find two numbers `x` and `y` that satisfy the equation:

    x^2 - y^2 = n

Then, the factors of `n` can be calculated as `n = (x - y) * (x + y)`.

## Installation

Make sure you have TypeScript and Node.js installed on your system. Then, follow the instructions below to set up the application:

1. Clone this repository or download the files.

2. Navigate to the project's root directory.

3. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

## Usage

Once you have installed the dependencies, you can run the application using the following command:

```
fermat <a> <p>
```

Replace `<a>` with the odd number for which you want to find non-trivial factors using Fermat's Algorithm.

The application will calculate the non-trivial factors of the provided number, if any, and display the result on the output.

## Example

Here is an example of using the application:

```
fermat 3 11
```

Output:

```
16104 5368
The second arg satisfies the Fermat's theorem
```

In this example, the application found the satisfying the Fermat's Algorithm.

## Disclaimer

This application is provided "as is," without warranty of any kind. Use at your own risk.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
