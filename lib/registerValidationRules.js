import LIVR       from 'livr';
import extraRules from 'livr-extra-rules';

const defaultRules = {
    ...extraRules,
    'ip'() {
        return (value, params, outputArr) => {
            if (value) {
                if (!value.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/)) return 'WRONG_IP_FORMAT';

                outputArr.push(value);
            }
        };
    },
};

LIVR.Validator.registerDefaultRules(defaultRules);
