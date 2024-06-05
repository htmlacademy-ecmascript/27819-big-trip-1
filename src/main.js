import InfoView from './view/info-view';
import InfoMainView from './view/info-main-view';
import InfoCostView from './view/info-cost-view';
import NewEventButtonView from './view/new-event-button-view';
import {render, RenderPosition} from './framework/render';
import PagePresenter from './presenter/page-presenter';
import FilterPresenter from './presenter/filter-presenter';
import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import FilterModel from './model/filter-model';
import DestinationsApiService from './destinations-api-service';
import OffersApiService from './offers-api-service';
import EventsApiService from './events-api-service';

const AUTHORIZATION = 'Basic oNch8ekBsuAiNa100';
const END_POINT = 'https://20.objects.htmlacademy.pro/big-trip';

const mainElement = document.querySelector('.trip-main');
const eventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

render(new InfoView(), mainElement, RenderPosition.AFTERBEGIN);

const infoElement = mainElement.querySelector('.trip-info');
render(new InfoMainView(), infoElement);
render(new InfoCostView(), infoElement);

const filterModel = new FilterModel();
const destinationsModel = new DestinationsModel({
  destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION)
});
const offersModel = new OffersModel({
  offersApiService: new OffersApiService(END_POINT, AUTHORIZATION)
});
const eventsModel = new EventsModel({
  eventsApiService: new EventsApiService(END_POINT, AUTHORIZATION),
  destinationsModel,
  offersModel
});

const pagePresenter = new PagePresenter({
  eventsContainer: eventsElement,
  eventsModel,
  destinationsModel,
  offersModel,
  filterModel,
  onNewEventDestroy: handleNewEventFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersElement,
  filterModel,
  eventsModel
});

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  pagePresenter.createEvent();
  newEventButtonComponent.element.disabled = true;
}

filterPresenter.init();
pagePresenter.init();
eventsModel.init()
  .finally(() => {
    render(newEventButtonComponent, mainElement);
  });
