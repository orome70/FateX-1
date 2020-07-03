/**
 * Preload a set of templates to compile and cache them for
 * fast access during rendering
 */
export const preloadHandlebarsTemplates = async function () {
    const templatePaths = [
        'systems/fatex/templates/actor/parts/sidebar/artwork.html',
        'systems/fatex/templates/actor/parts/sidebar/stress.html',
        'systems/fatex/templates/actor/parts/tabs/skills.html',
        'systems/fatex/templates/actor/parts/tabs/stunts.html',
        'systems/fatex/templates/actor/parts/tabloid/aspects.html',
        'systems/fatex/templates/actor/parts/tabloid/consequences.html',
        'systems/fatex/templates/actor/parts/tabloid/conditions.html',
        'systems/fatex/templates/actor/parts/header.html',
        'systems/fatex/templates/actor/parts/footer.html',
    ];

    return loadTemplates(templatePaths);
};
