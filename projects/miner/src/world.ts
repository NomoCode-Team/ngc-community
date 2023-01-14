export default (getContext: any) => {
     getContext.input.setDefaultCursor('url(assets/Cursor.png), pointer');
     getContext.physics.world.setBounds(0, 0, 6000, 6000, true, true, true, true)
     getContext.background = getContext.add.tileSprite(3000, 3000, 6000, 6000, "background");
} 
    
