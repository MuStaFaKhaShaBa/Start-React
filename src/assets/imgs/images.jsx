
function importAll(r) {
        let images = {};
        r.keys().map((item, index) => images[item.replace('./', '')] = { src: r(item) });
        return images;
}

let images = importAll(require.context('./../../assets/imgs', false, /\.png/));

setPortFolioImgData('cabin.png', 'log cabin', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);

setPortFolioImgData('cake.png', 'tasty cake', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);

setPortFolioImgData('circus.png', 'CIRCUS TENT', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);

setPortFolioImgData('game.png', 'controller', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);

setPortFolioImgData('safe.png', 'locked safe', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);

setPortFolioImgData('submarine.png', 'submarine', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,
        molestias magnam, recusandae quos quis inventore quisquam velit asperiores,
        vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.`);


function setPortFolioImgData(key, head, desc) {
        images[key] = { ...images[key], head, desc };
}

images = Object.entries(images).map(e => e[1]);

export default images;
