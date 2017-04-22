let Flat = React.createClass({

    render: function() {
        let flat_type = this.props.data.flat_type;
        let rooms_quantity = this.props.data.rooms.length;
        let floor = this.props.data.floor;
        let description = this.props.data.description;

        let for_rent = this.props.data.for_rent;
        let per_room_basis = this.props.data.per_room_basis;
        let new_build = this.props.data.new_build;

        return (
            <div className="row tile_entity">
                <div className="col-xs-4">
                    <span href="#" className="img-rounded">
                        <img src="/static/AQUILA.jpg" alt="Фото предложения" />
                    </span>
                </div>
                <div className="col-xs-4">
                    <p><span className="text-info">Тип: </span>{flat_type == 'S' ? 'Студия':'Отдельная квартира'}</p>
                    <p><span className="text-info">Количество комнат: </span>{rooms_quantity}</p>
                    <p><span className="text-info">Этаж: </span>{floor}</p>
                    <p><span className="text-info">Описание: </span>{description}</p>
                </div>
                <div className="col-xs-2">
                    <p>
                        <span className="text-info">Сдаётся: </span>
                        {
                            for_rent ? <span className="text-success">Да</span>:<span className="text-danger">Нет</span>
                        }
                    </p>
                    <p>
                        <span className="text-info">По комнатам: </span>
                        {
                            per_room_basis ? <span className="text-success">Да</span>:<span className="text-danger">Нет</span>
                        }
                    </p>
                    <p>
                        <span className="text-info">Новостройка: </span>
                        {
                            new_build ? <span className="text-success">Да</span>:<span className="text-danger">Нет</span>
                        }
                    </p>
                </div>
            </div>
        );

    }

});


let Room = React.createClass({

    render: function() {

        return (
            <div className="row tile_entity">
                {/*<div className="col-xs-4">
                    <span href="#" className="img-rounded">
                        <img src="/static/AQUILA.jpg" alt="Фото предложения" />
                    </span>
                </div>
                <div className="col-xs-4">
                    <p><span className="text-info">Тип: </span>{flat_type == 'L' ? 'Жилая':'Бытовая'}</p>
                    <p><span className="text-info">Площадь: </span>{rooms_quantity}</p>
                    <p><span className="text-info">Описание: </span>{description}</p>
                </div>
                <div className="col-xs-2">
                    <p>
                        <span className="text-info">Сдаётся: </span>
                        {
                            for_rent ? <span className="text-success">Да</span>:<span className="text-danger">Нет</span>
                        }
                    </p>
                </div>*/}
            </div>
        );

    }

});


let Owner = React.createClass({

    render: function() {

        return (
            <div className="row right_tile"></div>
        );

    }

});


let FlatPageContainer = React.createClass({

    render: function() {
        let data = this.props.data;

        return (
            <div className="container">
                <div className='row'>
                    <div className="col-xs-10">
                        <div className="col-xs-12">
                            <Flat data={data} />
                            <Room />
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <Owner />
                    </div>
                </div>
            </div>
        );

    }

});


let root_element = document.getElementById('single_flat');

if (root_element) {
    ReactDOM.render(
        <FlatPageContainer data={single_flat}/>,
        root_element
    );
}
