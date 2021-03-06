# Make Instances of Objects with a Constructor Function

---

Now let's put that great `constructor` function we made in the last lesson to use!

To use a `constructor` function we call it with the `new` keyword in front of it like:

`var myCar = new Car();`

`myCar` is now an `instance` of the `Car` constructor that looks like the object it described:

```javascript
{
  wheels: 4,
  engines: 1,
  seats: 5
}
```

Note that it is important to use the `new` keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to `this` inside the constructor should be referring to this new object.

Now, once the `myCar` `instance` is created it can be used like any other object and can have its properties accessed and modified the same way you would usually. For example:

`myCar.turboType = "twin";`

Our `myCar` variable now has a property `turboType` with a value of `"twin"`.

In the editor, use the `Car` `constructor` to create a new `instance` and assign it to `myCar`.

Then give `myCar` a `nickname` property with a string value.

Tests needed to pass:
  - The property `wheels` should still be `4` in the object `constructor`.
  - There should not be a property `nickname` in the object `constructor`.
  - The property `wheels` of `myCar` should equal `4`.
  - The property `nickname` of `myCar` should be a string.
---
