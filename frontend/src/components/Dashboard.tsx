
import { Gamepad2, LineChart, Coins, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Navigate, useNavigate } from 'react-router-dom';

export const DashBoard=()=> {

    const naviigate= useNavigate()
  return (
    <div className="min-h-screen w-full pb-10">
      {/* Hero section */}
      <section className="pt-32 px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="default" className="mb-4">Welcome to Plinko</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Drop the Ball, Win Big!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Experience the thrill of Plinko - a captivating game of chance where you drop a ball and watch it bounce through pegs to win amazing prizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              icon={Gamepad2}
              className="sm:w-auto w-full"
              onClick={()=>{naviigate('/game')}}
            >
              Play Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              icon={LineChart}
              className="sm:w-auto w-full"
               onClick={()=>{naviigate('/simulation')}}
            >
              Try Simulation
            </Button>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            How to Play Plinko
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Place Your Bet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose your bet amount and get ready for the excitement. The higher your bet, the bigger your potential winnings!
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Drop the Ball</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Select your starting position and watch as the ball bounces through a maze of pegs, creating a unique path every time.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Win Prizes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Land in high-multiplier zones to win big! Multipliers range from 1x to 1000x your original bet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Prize Zones */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Prize Multipliers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { multiplier: '1000x', color: 'bg-pink-500' },
              { multiplier: '300x', color: 'bg-purple-500' },
              { multiplier: '100x', color: 'bg-blue-500' },
              { multiplier: '50x', color: 'bg-green-500' },
            ].map((prize, index) => (
              <Card key={index} className={`${prize.color} text-white`}>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <span className="text-3xl font-bold mb-2">{prize.multiplier}</span>
                  <span className="text-sm opacity-90">Multiplier</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Game Modes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <Badge variant="default">Popular</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Classic Mode</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Play the traditional Plinko game with real stakes. Choose your bet amount and aim for the highest multipliers.
                </p>
                <Button variant="outline" size="sm" className="w-full" icon={ChevronRight} onClick={()=>{naviigate('/game')}}>
                  Play Classic
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <Badge variant="info">Risk-Free</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Simulation Mode</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Test your strategies without risking real money. Perfect for learning the game and understanding the odds.
                </p>
                <Button variant="outline" size="sm" className="w-full" icon={ChevronRight} onClick={()=>{naviigate('/simulation')}}>
                  Try Simulation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}