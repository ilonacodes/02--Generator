let generate = function (input) {
    input = input.replace(/[^a-zA-Z0-9]*/g, '');

    if (input === '') {
        return '';
    } else {
        let generateHashtag = (input) => input.trim().split(' ')
            .map(words => words[0] + words.slice(1)).join(' '),
        makeHashtag = (input) => '#' + input.replace(' ', '').toLowerCase();
        return makeHashtag(generateHashtag(input))
    }
};

let tag = document.getElementById("tag");
let result = document.getElementsByClassName("result")[0];

document.addEventListener("keydown", function(e) {
    let newInput = tag.value;
    let fullTag = generate(newInput);

    if (e.keyCode === 13) {
        result.innerHTML = fullTag;

        tag.setSelectionRange(0, tag.value.length);
    }

    console.log(result)
});
