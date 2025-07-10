import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                ElectroTech
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Продукция
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Поддержка
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Решения
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Команда
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Инновационные решения в электронике
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Производим высококачественные электронные компоненты и системы для
            промышленности, автомобильной отрасли и потребительской электроники
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Посмотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-lg text-gray-600">Почему выбирают нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Cpu" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Высокое качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Строгий контроль качества на всех этапах производства
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Zap" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Оперативная отгрузка и доставка по всей России
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Официальная гарантия на все продукты
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <p className="text-lg text-gray-600">
              Широкий ассортимент электронных компонентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Cpu" className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">Микроконтроллеры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Процессоры для встраиваемых систем
                </p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">
                  200+ моделей
                </Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">Силовые модули</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Компоненты для управления питанием
                </p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">
                  150+ моделей
                </Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Radio" className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">RF модули</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Радиочастотные компоненты
                </p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">
                  100+ моделей
                </Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gauge" className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">Датчики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Измерительные приборы</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">
                  300+ моделей
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Видов продукции</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Решения для отраслей
            </h2>
            <p className="text-lg text-gray-600">
              Специализированные продукты для различных сфер
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Factory" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Промышленность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Автоматизация производства и контроль качества
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Car" className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Автомобильная отрасль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Электронные системы управления и безопасности
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon
                  name="Smartphone"
                  className="h-12 w-12 text-blue-600 mb-4"
                />
                <CardTitle>Потребительская электроника</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Компоненты для бытовой техники и гаджетов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6" />
                <span className="text-xl font-bold">ElectroTech</span>
              </div>
              <p className="text-gray-400">
                Ведущий производитель электронных компонентов в России
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Микроконтроллеры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Силовые модули
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    RF модули
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Датчики
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Техническая поддержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Обучение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сервис
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 Москва, ул. Примерная, 123</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@electrotech.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ElectroTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
