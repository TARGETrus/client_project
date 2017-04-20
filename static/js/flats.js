var Flat = React.createClass({

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
        var author = this.props.data.url;
        var text = this.props.data.description;
        var bigText = this.props.data.owner.id;
        var visible = this.state.visible;

        return (
            <div className='flat'>
                <p className='news_author'>{author}:</p>
                <p className='news_text'>{text}</p>
                <a href="#"
                    onClick={this.readMoreClick}
                    className={'btn btn-success btn-lg ' + (visible ? 'none': '')}>
                    Подробнее
                </a>
                <p className={'news_big-text ' + (visible ? '': 'none')}>{bigText}</p>
            </div>
        )
    }

});

var Flats = React.createClass({

  render: function() {
      var data = this.props.data;
      var flatsTemplate;

      if (data.length > 0) {
          flatsTemplate = data.map(function(item, index) {
              return (
                  <div className="col-xs-4" key={index}>
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
                  {flatsTemplate}
              </div>
              <p className='flats_count'>
                  <strong className={(data.length > 0 ? '':'none')}>Всего предложений: {data.length}</strong>
              </p>
          </div>
      );
  }

});

ReactDOM.render(
    <Flats data={flats}/>,
    document.getElementById('root')
);