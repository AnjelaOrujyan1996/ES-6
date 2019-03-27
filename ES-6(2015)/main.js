function quux(strings, ...values) {
    console.log('xxxx');
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "xxxx"
    strings.raw[1] === "zzzz"
    values[0] === 42
}

quux`foo\n${42}bar`;

// String.raw`foo\n${42}bar` === "foo\\n42bar";
console.log(String.raw`foo\n${42}bar`=== "foo\\n42bar");