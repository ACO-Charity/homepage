export default
    {
        "id": 1,
        "name": "Menu",
        "items": [{
            "name": "Spalte 1",
            "type": "column",
            "cildren": [
                {
                    "name": "Impressum",
                    "id": 2,
                    "type": "link",
                    "link": "#impressum",
                    "parent": 1,
                }
            ]
        },
        {
            "name": "Spalte 2",
            "type": "column",
            "cildren": [
                {
                    "name": "Datenschutz",
                    "id": 2,
                    "type": "link",
                    "link": "#datenschutz",
                    "parent": 1,
                }
            ]
        }
        ]
    }