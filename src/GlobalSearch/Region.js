import React, { Component } from 'react';

import InputLoad from './InputLoad.js'


class Region extends Component { countryUnload
		render() {
			return(<div>
					

			<div>
			{(this.props.countryLoad || this.props.countryUnload) == 'by' &&
				<select 
				className="form-control-sm" 
				id={this.props.loadunload}
				onChange={this.props.selectCountry}>
						<InputLoad value={''} country={'Все области'} />
						<InputLoad value={'minskReg'} country={'Минская'} />
						<InputLoad value={'gomelReg'} country={'Гомельская'} />
						<InputLoad value={'grodnoReg'} country={'Гродненская'} />
						<InputLoad value={'vitebskReg'} country={'Витебская'} />
						<InputLoad value={'mogilevReg'} country={'Могилевская'} />
				</select>}
			</div>

			<div>
			{(this.props.countryLoad || this.props.countryUnload) == 'ru' &&
				<select 
				className="form-control-sm"
				id={this.props.loadunload} 
				onChange={this.props.selectCountry}>
						<InputLoad value={''} country={'Все области'} />
						<InputLoad value={'AltaiReg'} country={'Алтайский край'} />
						<InputLoad value={'AmurReg'} country={'Амурская область'} />
						<InputLoad value={'ArchReg'} country={'Архангельская область'} />
						<InputLoad value={'AstrReg'} country={'Астраханская область'} />
						<InputLoad value={'BelgorodReg'} country={'Белгородская область'} />
						<InputLoad value={'BrianskReg'} country={'Брянская область'} />
						<InputLoad value={'VladimirReg'} country={'Владимирская область'} />
						<InputLoad value={'VolgogradReg'} country={'Волгоградская область'} />
						<InputLoad value={'VologodReg'} country={'Вологодская область'} />
						<InputLoad value={'VoronegReg'} country={'Воронежская область'} />
						<InputLoad value={'MskReg'} country={'Москва'} />
						<InputLoad value={'EvreiReg'} country={'Еврейская автономная область'} />
						<InputLoad value={'ZabaiReg'} country={'Забайкальский край'} />
						<InputLoad value={'IvanovoReg'} country={'Ивановская область'} />
						<InputLoad value={'BaikonurReg'} country={'Байконур'} />
						<InputLoad value={'IrkutskReg'} country={'Иркутская область'} />
						<InputLoad value={'KabardinoReg'} country={'Кабардино-Балкарская Республика'} />
						<InputLoad value={'KaliningradReg'} country={'Калининградская область'} />
						<InputLoad value={'KalugaReg'} country={'Калужская область'} />
						<InputLoad value={'KamchatReg'} country={'Камчатский край'} />
						<InputLoad value={'KaracheevoReg'} country={'Карачаево-Черкесская Республика'} />
						<InputLoad value={'KemerovoReg'} country={'Кемеровская область'} />
						<InputLoad value={'KirovskReg'} country={'Кировская область'} />
						<InputLoad value={'KostromaReg'} country={'Костромская область'} />
						<InputLoad value={'KrasnodarReg'} country={'Краснодарский край'} />
						<InputLoad value={'KrsnoizrskReg'} country={'Красноярский край'} />
						<InputLoad value={'KurganReg'} country={'Курганская область'} />
						<InputLoad value={'KurskReg'} country={'Курская область'} />
						<InputLoad value={'LeningradReg'} country={'Ленинградская область'} />
						<InputLoad value={'LipetzkReg'} country={'Липецкая область'} />
						<InputLoad value={'MagadanReg'} country={'Магаданская область'} />
						<InputLoad value={'MskoblReg'} country={'Московская область'} />
						<InputLoad value={'MurmanskReg'} country={'Мурманская область'} />
						<InputLoad value={'NenecReg'} country={'Ненецкий автономный округ'} />
						<InputLoad value={'NigegorodReg'} country={'Нижегородская область'} />
						<InputLoad value={'NovgorodReg'} country={'Новгородская область'} />
						<InputLoad value={'NovosibReg'} country={'Новосибирская область'} />
						<InputLoad value={'OmskReg'} country={'Омская область'} />
						<InputLoad value={'OrenburgReg'} country={'Оренбургская область'} />
						<InputLoad value={'OrlovskReg'} country={'Орловская область'} />
						<InputLoad value={'PenzaReg'} country={'Пензенская область'} />
						<InputLoad value={'PermReg'} country={'Пермский край'} />
						<InputLoad value={'PrimorskReg'} country={'Приморский край'} />
						<InputLoad value={'PskovReg'} country={'Псковская область'} />
						<InputLoad value={'AdigeaReg'} country={'Республика Адыгея'} />
						<InputLoad value={'AltaiReg'} country={'Республика Алтай'} />
						<InputLoad value={'BashReg'} country={'Республика Башкортостан'} />
						<InputLoad value={'BurReg'} country={'Республика Бурятия'} />
						<InputLoad value={'DagReg'} country={'Республика Дагестан'} />
						<InputLoad value={'IngReg'} country={'Республика Ингушетия'} />
						<InputLoad value={'KalmReg'} country={'Республика Калмыкия'} />
						<InputLoad value={'KareliaReg'} country={'Республика Карелия'} />
						<InputLoad value={'KomiReg'} country={'Республика Коми'} />
						<InputLoad value={'KrimReg'} country={'Республика Крым'} />
						<InputLoad value={'MarielReg'} country={'Республика Марий Эл'} />
						<InputLoad value={'MordovReg'} country={'Республика Мордовия'} />
						<InputLoad value={'SachaReg'} country={'Республика Саха'} />
				</select>}
			</div>


			<div>
			{(this.props.countryLoad || this.props.countryUnload) == 'ua' &&
				<select 
				className="form-control-sm" 
				id={this.props.loadunload} 
				onChange={this.props.selectCountry}>
						<InputLoad value={''} country={'Все области'} />
						<InputLoad value={'VinicReg'} country={'Винницкая'} />
						<InputLoad value={'VolinReg'} country={'Волынская'} />
						<InputLoad value={'DneproReg'} country={'Днепропетровская'} />
						<InputLoad value={'DonezkReg'} country={'Донецкая'} />
						<InputLoad value={'ZitimirReg'} country={'Житомирская'} />
						<InputLoad value={'ZacarpatReg'} country={'Закарпатская'} />
						<InputLoad value={'ZaporogReg'} country={'Запорожская	'} />
						<InputLoad value={'IvanoFrankReg'} country={'Ивано-Франковская	'} />
						<InputLoad value={'KievReg'} country={'Киевская'} />
						<InputLoad value={'KirovogradReg'} country={'Кировоградская	'} />
						<InputLoad value={'LuganskReg'} country={'Луганская'} />
						<InputLoad value={'vovReg'} country={'Львовская'} />
						<InputLoad value={'NikokaevReg'} country={'Николаевская'} />
						<InputLoad value={'OsessReg'} country={'Одесская'} />
						<InputLoad value={'PoltavReg'} country={'Полтавская'} />
						<InputLoad value={'RovnoReg'} country={'Ровненская'} />
						<InputLoad value={'SumReg'} country={'Сумская'} />
						<InputLoad value={'TernopolReg'} country={'Тернопольская'} />
						<InputLoad value={'CharkovskReg'} country={'Харьковская'} />
						<InputLoad value={'ChersonReg'} country={'Херсонская'} />
						<InputLoad value={'ChmelReg'} country={'Хмельницкая'} />
						<InputLoad value={'CerkasskReg'} country={'Черкасская'} />
						<InputLoad value={'CernigoReg'} country={'Черниговская'} />
						<InputLoad value={'CernovicReg'} country={'Черновицкая'} />
				</select>}
			</div>

			<div>
			{(this.props.countryLoad || this.props.countryUnload) == 'kz' &&
				<select 
				className="form-control-sm" 
				id={this.props.loadunload} 
				onChange={this.props.selectCountry}>
						<InputLoad value={''} country={'Все области'} />
						<InputLoad value={'AkmolinReg'} country={'Акмолинская'} />
						<InputLoad value={'AktubinskReg'} country={'Актюбинская'} />
						<InputLoad value={'AlmatReg'} country={'Алматинская '} />
						<InputLoad value={'AnirauReg'} country={'Атырауская'} />
						<InputLoad value={'WostkzReg'} country={'Восточно-Казахстанская'} />
						<InputLoad value={'ZambilReg'} country={'Жамбылская'} />
						<InputLoad value={'ZapkzReg'} country={'Западно Казахстанская 	'} />
						<InputLoad value={'KaragandinskReg'} country={'Карагандинская'} />
						<InputLoad value={'KostanaiReg'} country={'Костанайская'} />
						<InputLoad value={'KsilordReg'} country={'Кзылординская 	'} />
						<InputLoad value={'MangiReg'} country={'Мангистауская '} />
						<InputLoad value={'PavlodarReg'} country={'Павлодарская '} />
						<InputLoad value={'SevkzReg'} country={'Северо-Казахстанская'} />
						<InputLoad value={'UzksReg'} country={'Южно-Казахстанская'} />
				</select>}
			</div>


				
				
				</div>)
		}
}

export default Region