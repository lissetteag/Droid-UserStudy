import participants from "./ParticipantsWithCaseIDs.json";
import data from "./JSSUserStudyCases.json";


//Get the cases assigned to the participant 
export function getUserData(participant_id) {
    //Get the id cases for the participant
    console.log("participant_id:  " + participant_id)

    const parIdInew = participant_id -1 ;
    const caseIds = participants[parIdInew ? parIdInew : 0]["caseID"];
    console.log("caseIds:  " + caseIds)
    let dataArr = []
    let dataArray = [];

    // We iterate over the cases in the case list above example
    for (const caseId of caseIds) {
        let extArr = data.filter((d) => d.caseID === caseId);

        dataArr.push(mendData(extArr));
    }

    for (const arr of dataArr) {
        dataArray = [...dataArray, ...arr];
    }

    return dataArray
}


const mendData = (arr) => {

    const len = arr.length;
    const left = 15 - len;

    for (let i = 0; i < left; i++) {
        arr = [...arr, null]
    }
    return arr
}

export const makeData = (data) => {
    let newData = []
    var listOfItems = [];
    var count = 0;

    for (const d of data) {
        if (count < 15) {
            if (d) {
                count++;
                if (!listOfItems.includes(d.itemName)) {
                    listOfItems.push(d.itemName);
                    let item = {
                        item: d.itemName,
                        itemType: d.type === "Property" ? "Attribute" : 'Method',
                        correct: false,
                        obvious: false,
                        redundant: false,
                        contextualized: false,
                        generalizable: false,
                        photo: d.targetID,
                        identifier: d.identifier,
                        itemName: d.itemName
                    }
                    newData.push(item)
                } else {
                    let item = {
                        item: "",
                        itemType: d.type === "Property" ? "Attribute" : 'Method',
                        correct: false,
                        obvious: false,
                        redundant: false,
                        contextualized: false,
                        generalizable: false,
                        photo: d.targetID,
                        identifier: d.identifier,
                        itemName: d.itemName
                    }
                    newData.push(item)
                }

            } else {
                let item = {
                    item: null,
                    itemType: null,
                    correct: null,
                    obvious: null,
                    redundant: null,
                    contextualized: null,
                    generalizable: null,
                    photo: null,
                    identifier: null,
                    itemName: null
                }
                newData.push(item)
            }
        } else {
            count = 0;
            listOfItems = [];
            if (d) {
                count++;
                if (!listOfItems.includes(d.itemName)) {
                    listOfItems.push(d.itemName);
                    let item = {
                        item: d.itemName,
                        itemType: d.type === "Property" ? "Attribute" : 'Method',
                        correct: false,
                        obvious: false,
                        redundant: false,
                        contextualized: false,
                        generalizable: false,
                        photo: d.targetID,
                        identifier: d.identifier,
                        itemName: d.itemName
                    }
                    newData.push(item)
                } else {
                    let item = {
                        item: "",
                        itemType: d.type === "Property" ? "Attribute" : 'Method',
                        correct: false,
                        obvious: false,
                        redundant: false,
                        contextualized: false,
                        generalizable: false,
                        photo: d.targetID,
                        identifier: d.identifier,
                        itemName: d.itemName
                    }
                    newData.push(item)
                }

            } else {
                let item = {
                    item: null,
                    itemType: null,
                    correct: null,
                    obvious: null,
                    redundant: null,
                    contextualized: null,
                    generalizable: null,
                    photo: null,
                    identifier: null,
                    itemName: null
                }
                newData.push(item)
            }
        }
    }

    return newData;
}
