export const Report = {
    "Enviroment": "PRODUCTION",
    "TimeStamp": "2022-11-07 13:27:17.488",
    "result": {
        "DQ_index": {
            "valid_percentage": "70",
            "DataCategories": [{
                "CategoryName": "Integrity",
                "Sum_Invalid_records": 17000,
                "Total_Records": 230445415,
                "valid_percentage": [70],
                "Detail": [
                    {
                        "QueryName":"ISO_CommonName_fromAIRIM",
                        "invalid_records": 3434,
                        "total_records": 1000,
                        "valid_percentage": [31]
                    }
                    ,
                    {

                        "QueryName":"LabelsNotHavingAP2OrJ2OwningInstance",
                        "invalid_records": 423,
                        "total_records": 1000,
                        "valid_percentage": [69]
                    },
                    {
                        "QueryName": "RelationshipTypesWithMoreThanOneOwningInstance",
                            "invalid_records": 0,
                            "total_records": 1000,
                            "valid_percentage": [69]
                        

                    },
                    {
                    "QueryName":"Wrong_Synonym_Types_In_SDOM",
                        "invalid_records": 0,
                        "total_records": 1000,
                        "valid_percentage": [69]
                    }
                    
                ]
            },
            {
                "CategoryName": "Accuracy",
                "Sum_Invalid_records": 17000,
                "Total_Records": 230445415,
                "valid_percentage": [25],
                "Detail": [
                    {
                        "QueryName":"Acuuracy Data",
                        "invalid_records": 3434,
                        "total_records": 1000,
                        "valid_percentage": [28]
                    }
                    ,
                    {

                        "QueryName":"Acuuracy Data_2",
                        "invalid_records": 423,
                        "total_records": 1000,
                        "valid_percentage": [82]
                    },
                    {
                        "QueryName": "Acuuracy Data_3",
                            "invalid_records": 0,
                            "total_records": 1000,
                            "valid_percentage": [45]
                        

                    },
                    {
                    "QueryName":"Acuuracy Data_4",
                        "invalid_records": 0,
                        "total_records": 1000,
                        "valid_percentage": [85]
                    }
                    
                ]
            }]
        }
    }
}
