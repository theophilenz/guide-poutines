//For all the documents
db.restos.update({}, {
    $set: {
        "menu_poutines.0._id": ObjectId()
    }
}, {
    multi: true
})

//FOR ONE DOCUMENT AT A TIME

db.restos.update({
    "url": "frite-alors-cremazie-ouest"
}, {
    $set: {
        "menu_poutines.1._id": ObjectId()
    }
})

//Change all the fields
db.restos.updateMany({}, { $rename: { "menu_poutines": "menu" } })

db.restos.update({}, {
    $set: {
        "menu.0.avis.1._id": ObjectId()
    }
}, {
    multi: true
})