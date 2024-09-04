const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/tecnocasa');

main().catch(err => console.log(err));

async function main () {
    /**
     * Modelad este esquema: App Runastic
     * 
     * https://www.notion.so/Planificaci-n-Back-End-FOAP-2024-IronHack-47fb5e2b62544704963209287f44c0ca?pvs=4#d0b05b3d44654851b935a7dc2c425e22
     */
}