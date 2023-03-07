import './Generate.css';
import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}
function Generate() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const generateDocument = () => {
        loadFile(
            'https://docxtemplater.com/tag-example.docx',
            function (error, content) {
                if (error) {
                    throw error;
                }
                var zip = new PizZip(content);
                var doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });
                doc.setData({
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    description: description,
                });
                try {
                    doc.render();
                } catch (error) {
                    function replaceErrors(key, value) {
                        if (value instanceof Error) {
                            return Object.getOwnPropertyNames(value).reduce(function (
                                error,
                                key) {
                                error[key] = value[key];
                                return error;
                            },
                                {});
                        }
                        return value;
                    } console.log(JSON.stringify({ error: error }, replaceErrors));
                    if (error.properties && error.properties.errors instanceof Array) {
                        const errorMessages = error.properties.errors
                            .map(function (error) {
                                return error.properties.explanation;
                            })
                            .join('\n');
                        console.log('errorMessages', errorMessages);
                    }
                    throw error;
                }

                var out = doc.getZip().generate({
                    type: 'blob',
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                });
                saveAs(out, 'output.docx');
            }
        );
    };

    return (
        <div className="generate-container">
      
            <form>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}

                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>

                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <button className="generate-button" type="button" onClick={() => generateDocument()}>
                    Generate
                </button>
            </form>
        </div>
    );
}
export default Generate;