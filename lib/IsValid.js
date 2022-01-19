class IsValid {
    static nonNegativeNumber(n) {
        if (typeof n !== 'number'
            || n < 0
            || !isFinite(n)) {
            return false
        }
        return true;
    }

    static nonNegativeInteger(n) {
        if (!IsValid.nonNegativeNumber(n) || n % 1 !== 0) {
            return false
        }
        return true;
    }

    static nonEmptyString(s) {
        if (typeof s !== 'string'
            || s.trim() === '') {
            return false
        }
        return true;
    }

    static correctObject(obj, size) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)
            || Object.keys(obj).length !== size) {
            return false;
        }
        return true;
    }
}

module.exports = IsValid;