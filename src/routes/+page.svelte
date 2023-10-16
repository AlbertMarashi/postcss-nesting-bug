<div class="foo">
    this should be blue
</div>
<div class="foo bar">
    this should be green
</div>
<style>

div {
    border: 1px solid red;
    padding: 10px;
    &.foo {
        border: 1px solid blue;
    }
    &.bar {
        border: 1px solid green;
    }
}

</style>