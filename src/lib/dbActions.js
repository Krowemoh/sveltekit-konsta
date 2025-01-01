export function dbCreate(db,file,item) {
    try {
        let params = '';

        for (let itemKey of Object.keys(item)) {
            if (params === "") {
                params = itemKey + " TEXT";
            } else {
                params = params + ", " + itemKey + " TEXT";
            }
        }

        params = "id INTEGER PRIMARY KEY AUTOINCREMENT, " + params + ", created TEXT, updated TEXT";

        let stmtString = `CREATE TABLE IF NOT EXISTS ${file} (${params})`;

        const stmt = db.prepare(stmtString);
        stmt.run(item);

        return true;
    } catch(err) {
        console.log("Failed to save");
        console.log(err);
        return false;
    }
}

export function dbInsert(db,file,item) {
    try {
        let params = '';
        let values = '';

        for (let itemKey of Object.keys(item)) {
            if (params === "") {
                params = itemKey;
                values = "@" + itemKey;
            } else {
                params = params + ", " + itemKey;
                values = values + ", @" + itemKey;
            }
        }

        let stmtString = `INSERT INTO ${file} (${params}, created, updated) VALUES (${values}, @created, @updated)`;

        console.log(stmtString);
        console.log(item);

        item.created = new Date().toISOString();
        item.updated = new Date().toISOString();

        const stmt = db.prepare(stmtString);
        let result = stmt.run(item);

        return result.lastInsertRowid; 

    } catch (err) {
        console.log("Failed to save");
        console.log(err);
        return false;
    }
}

export function dbUpdate(db,file,item,where) {
    try {
        item.updated = new Date().toISOString();

        let params = '';
        let values = [];

        for (let itemKey of Object.keys(item)) {
            if (params === "") {
                params = itemKey + " = ?";
                values.push(item[itemKey]);

            } else {
                params = params + ", " + itemKey + " = ?";
                values.push(item[itemKey]);
            }
        }

        let whereParams = ''
        let whereValues = [];

        for (let itemKey of Object.keys(where)) {
            if (whereParams === "") {
                whereParams = itemKey + " = ?";
                whereValues.push(where[itemKey]);

            } else {
                whereParams = whereParams + " AND " + itemKey + " = ?";
                whereValues.push(where[itemKey]);
            }
        }

        let stmtString = `UPDATE ${file} SET ${params} WHERE ${whereParams}`;

        const stmt = db.prepare(stmtString);
        stmt.run(...values, ...whereValues);

        return true;

    } catch (err) {
        console.log("Failed to save");
        console.log(err);
        return false;
    }
}

export function dbDelete(db,file,where) {
    try {
        let whereParams = ''
        let whereValues = [];

        for (let itemKey of Object.keys(where)) {
            if (whereParams === "") {
                whereParams = itemKey + " = ?";
                whereValues.push(where[itemKey]);

            } else {
                whereParams = whereParams + " AND " + itemKey + " = ?";
                whereValues.push(where[itemKey]);
            }
        }

        let stmtString = `DELETE FROM ${file} WHERE ${whereParams}`;

        const stmt = db.prepare(stmtString);
        stmt.run(...whereValues);

        return true;

    } catch (err) {
        console.log("Failed to delete");
        console.log(err);
        return false;
    }
}
