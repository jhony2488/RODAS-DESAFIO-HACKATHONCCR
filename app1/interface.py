from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.core.window import Window
from kivy.uix.label import Label
from kivy.uix.behaviors.button import ButtonBehavior
from kivy.graphics import Color, Ellipse, Rectangle, Triangle
from kivy.properties import ListProperty
from kivy.uix.popup import Popup
from kivy.uix.image import Image
from kivy.animation import Animation
import json
from kivy.garden.mapview import MapMarkerPopup


class Gerenciador(ScreenManager):
    pass


class Menu(Screen):
    def on_pre_enter(self):
        Window.bind(on_request_close=self.confirmacao)

    def confirmacao(self, *args, **kwargs):
        box = BoxLayout(orientation='vertical', padding=10, spacing=10)
        botoes = BoxLayout(padding=10, spacing=10)

        pop = Popup(title='Deseja mesmo sair?', content=box, size_hint=(None, None),
                    size=(150, 150))

        sim = Botao(text='Sim', on_release=App.get_running_app().stop)
        nao = Botao(text='Não', on_release=pop.dismiss)

        botoes.add_widget(sim)
        botoes.add_widget(nao)

        atencao = Image(source='atencao.png')

        box.add_widget(atencao)
        box.add_widget(botoes)

        animText = Animation(color=(0, 0, 0, 1)) + Animation(color=(1, 1, 1, 1))
        animText.repeat = True
        animText.start(sim)
        anim = Animation(size=(300, 180), duration=0.2, t='out_back')
        anim.start(pop)
        pop.open()
        return True


class Botao(ButtonBehavior, Label):
    cor = ListProperty([0.1, 0.5, 0.7, 1])
    cor2 = ListProperty([0.1, 0.1, 0.1, 1])

    def __init__(self, **kwargs):
        super(Botao, self).__init__(**kwargs)
        self.atualizar()

    def on_pos(self, *args):
        self.atualizar()

    def on_size(self, *args):
        self.atualizar()

    def on_press(self, *args):
        self.cor, self.cor2 = self.cor2, self.cor

    def on_release(self, *args):
        self.cor, self.cor2 = self.cor2, self.cor

    def on_cor(self, *args):
        self.atualizar()

    def atualizar(self, *args):
        self.canvas.before.clear()
        with self.canvas.before:
            Color(rgba=self.cor)
            Ellipse(size=(self.height, self.height),
                    pos=self.pos)
            Ellipse(size=(self.height, self.height),
                    pos=(self.x + self.width - self.height, self.y))
            Rectangle(size=(self.width - self.height, self.height),
                      pos=(self.x + self.height / 2.0, self.y))


class Tarefas(Screen):
    tarefas = []
    path = ''

    def on_pre_enter(self):
        self.path = App.get_running_app().user_data_dir + '/'
        self.loadData()
        Window.bind(on_keyboard=self.voltar)
        for tarefa in self.tarefas:
            self.ids.box.add_widget(Tarefa(text=tarefa))

    def voltar(self, window, key, *args):
        if key == 27:
            App.get_running_app().root.current = 'menu'
            return True

    def on_pre_leave(self):
        Window.unbind(on_keyboard=self.voltar)

    def loadData(self, *args):
        try:
            with open(self.path + 'data.json', 'r') as data:
                self.tarefas = json.load(data)
        except FileNotFoundError:
            pass

    def saveData(self, *args):
        with open(self.path + 'data.json', 'w') as data:
            json.dump(self.tarefas, data)

    def removeWidget(self, tarefa):
        texto = tarefa.ids.label.text
        self.ids.box.remove_widget(tarefa)
        self.tarefas.remove(texto)
        self.saveData()

    def addWidget(self):
        texto = self.ids.texto.text
        self.ids.box.add_widget(Tarefa(text=texto))
        self.ids.texto.text = ''
        self.tarefas.append(texto)
        self.saveData()


# Teste DASS 21
class Testepsi0(Screen):
    pass


class Testepsi1(Screen):
    pass


class Testepsi2(Screen):
    pass


class Testepsi3(Screen):
    pass


class Testepsi4(Screen):
    pass


class Testepsi5(Screen):
    pass


class Testepsi6(Screen):
    pass


class Testepsi7(Screen):
    pass


class Testepsi8(Screen):
    pass


class Testepsi9(Screen):
    pass


class Testepsi10(Screen):
    pass


class Testepsi11(Screen):
    pass


class Testepsi12(Screen):
    pass


class Testepsi13(Screen):
    pass


class Testepsi14(Screen):
    pass


class Testepsi15(Screen):
    pass


class Testepsi16(Screen):
    pass


class Testepsi17(Screen):
    pass


class Testepsi18(Screen):
    pass


class Testepsi19(Screen):
    pass


class Testepsi20(Screen):
    pass


class Testepsi21(Screen):
    pass


class TestepsiResult(Screen):
    pass


class TroqueseusPontos(Screen):
    pass


class MapaPsi(Screen):
    def lst_pts(self):
        import pandas as pd
        df = pd.read_csv('Tabela Psicologos - Página1.csv')
        self.lista = []
        for i in range(0, len(df)):
            lt = df.latitude[i]
            ln = df.longitude[i]
            self.lista.append((lt, ln))

            marker = MapMarkerPopup(lat=10, lon=15)
            self.add_widget(marker)

class EmpresasParceiras(Screen):
    pass


class Sobre(Screen):
    pass


class TesteSono0(Screen):
    pass


class TesteSono1(Screen):
    pass

class TesteSono2(Screen):
    pass

class TesteSono3(Screen):
    pass

class TesteSono4(Screen):
    pass

class TesteSono5(Screen):
    pass

class TesteSono6(Screen):
    pass

class TesteSono7(Screen):
    pass

class TesteSono8(Screen):
    pass

class TesteSonoR(Screen):
    pass

class Tarefa(BoxLayout):
    def __init__(self, text='', **kwargs):
        super(Tarefa, self).__init__(**kwargs)
        self.ids.label.text = text


class Test(App):
    def build(self):
        self.pontos = {'dep': 0, 'ans': 0, 'str': 0}
        self.sono = 0
        return Gerenciador()

    def calc_pontos_sono(self, *args):
        pts = self.sono
        if pts <= 6:
            sit = f'Voce fez {pts} pontos e possui um Sono normal'
        elif pts <= 8:
            sit = f'Voce fez {pts} pontos e esta na Media de sonolencia'
        else:
            sit = f'Voce fez {pts} pontos.\nATENÇÃO! Sonolência anormal (possivelmente patológica)\nTome muito cuidado, principalmente quando estiver na estrada e procure por ajuda médica'
        return sit

    def calc_pontos_dep(self, *args):
        pts = self.pontos['dep'] * 2
        if pts <= 9:
            sit = 'Normal'
        elif pts <= 13:
            sit = 'Leve'
        elif pts <= 20:
            sit = 'Moderado'
        elif pts <= 27:
            sit = 'Severo'
        else:
            sit = 'Extremamente severo'
        return sit

    def calc_pontos_ans(self, *args):
        pts = self.pontos['ans'] * 2
        if pts <= 7:
            sit = 'Normal'
        elif pts <= 9:
            sit = 'Leve'
        elif pts <= 14:
            sit = 'Moderado'
        elif pts <= 19:
            sit = 'Severo'
        else:
            sit = 'Extremamente severo'
        return sit

    def calc_pontos_str(self, *args):
        pts = self.pontos['str'] * 2
        if pts <= 14:
            sit = 'Normal'
        elif pts <= 18:
            sit = 'Leve'
        elif pts <= 25:
            sit = 'Moderado'
        elif pts <= 33:
            sit = 'Severo'
        else:
            sit = 'Extremamente severo'
        return sit

    def ver_situacao(self):
        if self.calc_pontos_str() == 'Extremamente severo' or self.calc_pontos_dep() == 'Extremamente severo' or self.calc_pontos_ans() == 'Extremamente severo':
            frase = 'ATENÇÃO! Você atingiu um Nível Muito Severo em uma ou mais situações. Você deveria procurar um especialista com urgência'
        elif self.calc_pontos_str() == 'Severo' or self.calc_pontos_dep() == 'Severo' or self.calc_pontos_ans() == 'Severo':
            frase = 'Você atingiu um Nível Severo em uma ou mais situações. Você deveria procurar um especialista'
        elif self.calc_pontos_str() == 'Moderado' or self.calc_pontos_dep() == 'Moderado' or self.calc_pontos_ans() == 'Moderado':
            frase = 'Você atingiu um Nível Moderado em uma ou mais situações. Você deveria procurar um especialista assim que possível'
        else:
            frase = 'Você está saúdavel mentalmente, mas se sentir necessidade, consulte um especialista'
        return frase

    def mudar_menu(*args):
        App.get_running_app().root.current = 'menu'

    def mudar_mapa(*args):
        App.get_running_app().root.current = 'mapapsi'

    def alerta(self, *args, **kwargs):
        box = BoxLayout(orientation='vertical', padding=10, spacing=10)
        botoes = BoxLayout(padding=10, spacing=10)

        pop = Popup(title=f'{self.ver_situacao()}', content=box, size_hint=(None, None),
                    size=(300, 300))
        a = False
        voltar = Botao(text='Menu', on_release=self.mudar_menu)
        mapa = Botao(text='Mapa', on_release=self.mudar_mapa)

        botoes.add_widget(voltar)
        botoes.add_widget(mapa)

        atencao = Image(source='atencao.png')

        box.add_widget(atencao)
        box.add_widget(botoes)

        # animText = Animation(color=(0, 0, 0, 1)) + Animation(color=(1, 1, 1, 1))
        # animText.repeat = True
        # animText.start(mapa)
        # anim = Animation(size=(300, 180), duration=0.2, t='out_back')
        # anim.start(pop)
        pop.open()
        return True




Test().run()
