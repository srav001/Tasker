import openToast from 'core/Toast';

import db from './db';

const dbConnector = db;

const handleError = (msg: string) => {
    openToast(msg, 'danger');
};

const services = {
    dbConnector,

    select: async (table: string, action: string, columns = '*') => {
        try {
            const { data, error } = await dbConnector.from(table).select(columns);
            if (error) throw error;
            return data;
        } catch (error) {
            handleError(`An error occured while ${action}`);
            throw error;
        }
    },
    insert: async (table: string, values: any[], action: string) => {
        try {
            const { data, error } = await dbConnector.from(table).insert(values);
            if (error) throw error;
            return data;
        } catch (error) {
            handleError(`An error occured while ${action}`);
            throw error;
        }
    },
    update: async (
        table: string,
        value: Record<string, unknown>,
        whereCondition: Record<string, unknown>,
        action: string
    ) => {
        try {
            const { data, error } = await dbConnector.from(table).update(value).match(whereCondition);
            if (error) throw error;
            return data;
        } catch (error) {
            handleError(`An error occured while ${action}`);
            throw error;
        }
    },
};

export default services;
