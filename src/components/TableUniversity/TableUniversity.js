import React from 'react';

const TableUniversity = (props) => {
    const {university, country} = props;
    return (
        <div>
            <h2 className='text-center text-uppercase'>universities of {country}</h2>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">Name</th>
                        <th scope="col">Website</th>
                        <th scope="col">Domains</th>
                    </tr>
                    </thead>
                    <tbody>
                    {university.map((el, i) => (
                        <tr>
                            <th scope='row'>{i + 1}</th>
                            <td>{el.country}</td>
                            <td>{el.name}</td>
                            <td><a href={el.web_pages[0]}>{el.web_pages.map(el => <i>{el}</i>)}</a></td>
                            <td>{el.domains.map(el => <b>{el}</b>)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    );
};

export default TableUniversity;