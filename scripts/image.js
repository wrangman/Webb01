function showImg(whatProject) {
    switch (whatProject) {
        case 'pos':
            thisPage = 'img/position_1080p.png';
            break;
        case 'grid':
            thisPage = 'img/grid_1080p.png';
            break;    
        case 'colorc':
            thisPage = 'img/colorc_1080p.png';
            break;    
        case 'calc':
            thisPage = 'img/calc_1080p.png';
            break;    
        default:
            alert("Couldn't find image!");
    }
    window.open(thisPage, '_blank');
}