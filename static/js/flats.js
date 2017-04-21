let Flat = React.createClass({

    getInitialState: function() {
        return {
            visible: false
        };
    },

    readMoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },

    render: function() {
        let flat_type = this.props.data.flat_type;
        let rooms_quantity = this.props.data.rooms.length;
        let floor = this.props.data.floor;
        let description = this.props.data.description;

        let for_rent = this.props.data.for_rent;
        let per_room_basis = this.props.data.per_room_basis;
        let new_build = this.props.data.new_build;

        return (
            <div className="row flat">
                <div className="col-xs-4">
                    <span href="#" className="img-rounded">
                        <img src="/static/AQUILA.jpg" alt="Фото предложения" />
                    </span>
                </div>
                <div className="col-xs-8">
                    <p><span className="text-info">Тип: </span>{flat_type}</p>
                    <p><span className="text-info">Количество комнат: </span>{rooms_quantity}</p>
                    <p><span className="text-info">Этаж: </span>{floor}</p>
                    <p><span className="text-info">Описание: </span>{description}</p>
                    <a href="#" className="btn btn-success btn-lg">Подробнее</a>
                </div>
            </div>
        )

    }

});


let Flats = React.createClass({

    render: function() {
        let data = this.props.data;
        let flatsTemplate;

        if (data.length > 0) {
            flatsTemplate = data.map(function(item, index) {
                return (
                    <div className="col-xs-12" key={index}>
                        <Flat data={item} />
                    </div>
                )
            })
        } else {
          flatsTemplate = <p>К сожалению предложений нет</p>
        }

        return (
            <div>
                <div className='row'>
                    <div className="col-xs-10">
                        {flatsTemplate}
                    </div>
                    <div className="col-xs-2 filter_form">
                        <FilterForm />
                    </div>
                </div>
                <p className='flats_count'>
                    <strong className={(data.length > 0 ? '':'none')}>Всего предложений: {data.length}</strong>
                </p>
            </div>
        );

    }

});


let FilterForm = React.createClass({

    render: function() {

        return (
            <form>
                <div className="checkbox">
                    <label><input type="checkbox" name="flat_type"> Студия</input></label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" name="rent"> Аренда</input></label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" name="per_room_basis"> По комнатам</input></label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" name="new_built"> Новостройка</input></label>
                </div>
                <a href="#" className="btn btn-primary">Filter</a>
            </form>
        );

    }

});


let root_element = document.getElementById('flats');

if (root_element) {
    ReactDOM.render(
        <Flats data={flats}/>,
        root_element
    );
}
