<div class="foo">
    foo
</div>
<div class="foo bar">
    bar
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