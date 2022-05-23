const fontContainer = document.querySelector("#blotter");
const containerTexts = fontContainer.innerText.toUpperCase().split(" ");
    // Clear container.
    fontContainer.innerText = "";

    const material = new Blotter.SlidingDoorMaterial();
    const blotterTexts = containerTexts.map(function(text) {
        return new Blotter.Text(text, {
            family: "Monument",
            size: 66.5,
            needsUpdate: true,
            fill: "white",
            leading: "1",
            paddingLeft: 1,
            paddingRight: 10
        });
    });
    material.uniforms.uAnimateHorizontal.value = 1;
    const blotter = new Blotter(material, {
        texts: blotterTexts
    });

    // Append Blotter Texts back into container.
    blotterTexts.forEach(function(text) {
        const scope = blotter.forText(text);

        scope.appendTo(fontContainer);
    });