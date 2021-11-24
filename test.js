class Test {
  test() {
    console.log(this);
  }
}

const test = new Test();
test.test()