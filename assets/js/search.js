function similarity(a, b) {

    a = normalizeText(a);
    b = normalizeText(b);

    let matches = 0;

    for (let char of a) {

        if (b.includes(char)) {

            matches++;

        }

    }

    return matches;

}

function fuzzyFind(query, items) {

    let bestMatch = null;
    let bestScore = 0;

    items.forEach(item => {

        const score =
            similarity(query, item.name);

        if (score > bestScore) {

            bestScore = score;
            bestMatch = item;

        }

    });

    return bestMatch;

}
